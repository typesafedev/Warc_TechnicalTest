using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProductShopDataLayer.Classes;

namespace ProductShopDataLayer
{
    public class ProductShopDataModel : DbContext
    {
        public ProductShopDataModel()
            : base("name=ProductShopDBContext")
        {
        }

        public virtual  DbSet<Product> Products { get; set; }
    }
}
