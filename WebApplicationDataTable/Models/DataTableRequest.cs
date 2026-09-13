namespace WebApplicationDataTable.Models;

public class DataTableRequest
{
    public int Draw { get; set; }
    public int Start { get; set; }
    public int Length { get; set; }
    public DataTableSearch Search { get; set; } = null!;
    public List<DataTableOrder> Order { get; set; } = null!;
    public List<DataTableColumn> Columns { get; set; } = null!;
}
