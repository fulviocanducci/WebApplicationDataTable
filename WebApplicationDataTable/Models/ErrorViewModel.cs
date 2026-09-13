using Microsoft.EntityFrameworkCore;
using System.Data;
using System.Linq.Dynamic.Core;
using System.Reflection;
using System.Text;

namespace WebApplicationDataTable.Models;

public class ErrorViewModel
{
    public string RequestId { get; set; } = string.Empty;

    public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
}

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

public class DataTableRequest
{
    public int Draw { get; set; }
    public int Start { get; set; }
    public int Length { get; set; }
    public DataTableSearch Search { get; set; }
    public List<DataTableOrder> Order { get; set; }
    public List<DataTableColumn> Columns { get; set; }
}

public class DataTableSearch
{
    public string Value { get; set; } = string.Empty;
    public bool Regex { get; set; }
}

public class DataTableResponse<T>
{
    public int Draw { get; set; }
    public int RecordsTotal { get; set; }
    public int RecordsFiltered { get; set; }
    public IEnumerable<T> Data { get; set; }
}

public class DataTableOrder
{
    public int Column { get; set; }
    public string Dir { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;

    public string Direction
    {
        get
        {
            return $"{Name} {Dir.ToUpper()}";
        }
    }

    public bool IsValid => !string.IsNullOrWhiteSpace(Name) && !string.IsNullOrWhiteSpace(Dir);
}
public class DataTableColumn
{
    public string Data { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public bool Searchable { get; set; }
    public bool Orderable { get; set; }
    public DataTableSearch Search { get; set; }
}
