namespace WebApplicationDataTable.Models;

public record class RouteValue(string Name, object Value)
{
    public static RouteValue Create(string name, object value)
    {
        return new(name, value);
    }
    public static RouteValue Create(string name, int value)
    {
        return new(name, value);
    }
    public static RouteValue Create(string name, long value)
    {
        return new(name, value);
    }
    public static RouteValue Create(string name, byte value)
    {
        return new(name, value);
    }

    public static implicit operator RouteValue(Tuple<string, object> source)
    {
        return new RouteValue(source.Item1, source.Item2);
    }
}
