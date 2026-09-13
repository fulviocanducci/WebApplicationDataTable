namespace WebApplicationDataTable.Models;

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
