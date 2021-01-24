using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ProductShopBusinessLayer.Classes;
using ProductShopDataObjects.Classes;

namespace ProductShop.Models
{
    public class HomepageViewModel
    {
        public List<IProduct> Products { get; set; }
    }
}