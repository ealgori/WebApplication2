using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication2.DBModels
{
    public class Todo:BaseEntity
    {
        public string Name { get; set; }
        public string Comment { get; set; }
    }
}