namespace WebApplicationDataTable.Views.Shared.Components.ButtonEdit
{
    public class ButtonEditModel(object id, string action, string controller)
    {
        public object Id { get; set; } = id;
        public string Action { get; set; } = action;
        public string Controller { get; set; } = controller;

        public static ButtonEditModel Create(object id, string action, string controller)
        {
            return new ButtonEditModel(id, action, controller);
        }
    }
}
