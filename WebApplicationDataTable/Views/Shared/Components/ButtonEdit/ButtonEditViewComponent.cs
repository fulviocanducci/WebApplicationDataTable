using Microsoft.AspNetCore.Mvc;

namespace WebApplicationDataTable.Views.Shared.Components.ButtonEdit
{
    public class ButtonEditViewComponent : ViewComponent
    {
        public IViewComponentResult Invoke(object id, string action, string controller)
        {
            return View
            (
                ButtonEditModel.Create
                (
                    id,
                    action,
                    controller
                )
            );
        }
    }
}
