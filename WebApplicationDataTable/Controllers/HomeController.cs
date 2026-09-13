using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using WebApplicationDataTable.Models;
namespace WebApplicationDataTable.Controllers
{
    public class CitiesController(S2Context context) : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Data(DataTableRequest request)
        {
            var data = await context
                .Citiesofworlds
                .AsNoTracking()
                .ToDataTableAsync(request);
            return Json(data);
        }
    }

    public class TabulatorController(S2Context context) : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Data([FromForm] TabulatorRequest request)
        {
            int page = request.Page;
            int size = request.Size;
            int skip = (page - 1) * size;
            var query = context.Citiesofworlds.AsNoTracking().AsQueryable();
            int count = await query.CountAsync();
            int last_page = (int)Math.Ceiling((decimal)count / size);
            query = query.OrderBy(x => x.Id);
            var data = await query.Skip(skip).Take(size).ToListAsync();
            return Json(new { data, page, last_page });
        }
    }

    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Grid([FromServices] S2Context context)
        {
            if (HttpContext.Request.Headers.XRequestedWith == "XMLHttpRequest")
            {
                return PartialView("_Grid", context.Citiesofworlds);
            }
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
