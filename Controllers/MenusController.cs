using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AngularCoreApiSample.Controllers
{
    public class MenusController : Controller
    {
        [HttpGet("")]
        public string Warmup()
        {
            return "Menus API is up and running";
        }

        [HttpGet("api/menus")]
        public IActionResult GetMenus()
        {
            var menus = new[] { "Home", "About", "Products", "Partners", "Contact Us" };
            return Ok(menus);
        }
    }
}