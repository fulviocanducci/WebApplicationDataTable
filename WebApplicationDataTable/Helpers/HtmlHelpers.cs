using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.Routing;
using WebApplicationDataTable.Models;

namespace WebApplicationDataTable.Helpers;

public static class HtmlHelpers
{

    public static IHtmlContent ButtonEdit(this IHtmlHelper html, string action, string controller, int id)
    {
        return ButtonEdit(html, action, controller, new RouteValue("id", id));
    }

    public static IHtmlContent ButtonEdit(this IHtmlHelper html, string action, string controller, long id)
    {
        return ButtonEdit(html, action, controller, new RouteValue("id", id));
    }

    public static IHtmlContent ButtonEdit(this IHtmlHelper html, string action, string controller, byte id)
    {
        return ButtonEdit(html, action, controller, new RouteValue("id", id));
    }

    public static IHtmlContent ButtonEdit(this IHtmlHelper html, string action, string controller, params RouteValue[] values)
    {
        var urlHelperFactory = html.ViewContext.HttpContext.RequestServices.GetRequiredService<IUrlHelperFactory>();

        var urlHelper = urlHelperFactory.GetUrlHelper(html.ViewContext);

        var url = urlHelper.Action(action, controller, values.ToDictionary(c => c.Name, c => c.Value));

        var tag = new TagBuilder("a");

        tag.Attributes["href"] = url;
        tag.AddCssClass("btn");
        tag.AddCssClass("btn-primary");
        tag.AddCssClass("btn-sm");

        var icon = new TagBuilder("i");
        icon.AddCssClass("bi");
        icon.AddCssClass("bi-pencil-square");
        tag.InnerHtml.AppendHtml(icon);

        tag.InnerHtml.Append(" Editar");

        return tag;
    }
}
