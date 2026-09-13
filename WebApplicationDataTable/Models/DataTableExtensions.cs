using Microsoft.EntityFrameworkCore;
using System.Data;
using System.Linq.Dynamic.Core;
using System.Reflection;
using System.Text;

namespace WebApplicationDataTable.Models;

public static class DataTableExtensions
{
    private static string GetComprationSearch<T>(List<DataTableColumn> columns, string value)
    {
        StringBuilder str = new();
        foreach (var column in columns)
        {
            if (str.Length > 0)
            {
                str.Append(" OR ");
            }
            var property = typeof(T).GetProperty(column.Name, BindingFlags.Public | BindingFlags.Instance | BindingFlags.IgnoreCase);
            if (property == null)
            {
                continue;
            }
            var type = Nullable.GetUnderlyingType(property.PropertyType) ?? property.PropertyType;
            if (type == typeof(string))
            {
                str.Append($"{property.Name}.Contains(@0)");
                continue;
            }
            if (long.TryParse(value, out _))
            {
                if (type == typeof(int))
                {
                    str.Append($"{property.Name}=@0");
                    continue;
                }

                if (type == typeof(long))
                {
                    str.Append($"{property.Name}=@0");
                    continue;
                }
            }
            if (type == typeof(decimal) && decimal.TryParse(value, out _))
            {
                str.Append($"{property.Name}=@0");
                continue;
            }
            if (type == typeof(double) && double.TryParse(value, out _))
            {
                str.Append($"{property.Name}=@0");
                continue;
            }

            if (type == typeof(Guid))
            {
                str.Append($"{property.Name}=@0");
                continue;
            }
        }
        return str.ToString();
    }
    public static async Task<DataTableResponse<T>> ToDataTableAsync<T>(this IQueryable<T> query, DataTableRequest request) where T : class, new()
    {
        int recordsTotal = await query.CountAsync();

        if (!string.IsNullOrWhiteSpace(request.Search?.Value))
        {
            string columns = GetComprationSearch<T>([.. request.Columns.Where(c => c.Searchable)], request.Search.Value);
            if (!string.IsNullOrWhiteSpace(columns) && columns.Length > 0)
            {
                query = query.Where(columns, request.Search.Value);
            }
        }

        var recordsFiltered = await query.CountAsync();

        if (request.Order != null && request.Order.Any() && request.Order[0].IsValid)
        {
            query = query.OrderBy(request.Order[0].Direction);
        }

        var data = await query.Skip(request.Start).Take(request.Length).ToListAsync();

        return new DataTableResponse<T>
        {
            Draw = request.Draw,
            RecordsTotal = recordsTotal,
            RecordsFiltered = recordsFiltered,
            Data = data
        };
    }
}
