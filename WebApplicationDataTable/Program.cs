using Microsoft.EntityFrameworkCore;
using WebApplicationDataTable.Models;

namespace WebApplicationDataTable
{
    public class Program
    {
        public const string KeyDatabaseDefault = "DatabaseDefault";
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var configuration = builder.Configuration;
            builder.Services.AddControllersWithViews();
            builder.Services.AddDbContextPool<S2Context>(options =>
            {
                string? connectionString = configuration.GetConnectionString(KeyDatabaseDefault) ?? throw new Exception("Connection String Error");
                options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
            });
            var app = builder.Build();
            if (!app.Environment.IsDevelopment())
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();
            app.UseAuthorization();
            app.MapStaticAssets();
            app.MapControllerRoute(name: "default", pattern: "{controller=Home}/{action=Index}/{id?}")
                .WithStaticAssets();
            app.Run();
        }
    }
}
