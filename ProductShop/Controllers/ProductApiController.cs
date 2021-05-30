using System.Net;
using System.Web.Mvc;
using ProductShopBusinessLayer;
using ProductShopDataObjects.Classes;

namespace ProductShop.Controllers
{ 
    public class ProductApiController : Controller
    {
        private readonly IProductProvider _productProvider;

        public ProductApiController()
        {
            _productProvider = new ProductProvider();
        }

        [HttpGet]
        [Route("api/product")]
        public JsonResult Index()
        {
            Response.StatusCode = (int)HttpStatusCode.OK;
            return Json(_productProvider.GetAllProducts(), JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        [Route("api/product/{id}")]
        public JsonResult Product(int id)
        {
            Response.StatusCode = (int)HttpStatusCode.OK;
            return Json(_productProvider.GetProductById(id), JsonRequestBehavior.AllowGet);
        }
    }
}