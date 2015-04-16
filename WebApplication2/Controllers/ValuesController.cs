using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication2.DBModels;

namespace WebApplication2.Controllers
{
    //[Authorize]
    public class ValuesController : ApiController
    {
        
        
        
        // GET api/values
        public IEnumerable<Todo> Get()
        {
            using (Context contex  = new Context())
            {
                var todos = contex.Todos.ToList();
                return todos;
            }
            
        }

        public IEnumerable<Todo> Get(string filter, int? page)
        {
            
            int pageSize = 4;
            //if (string.IsNullOrEmpty(filter))
            //    return Get();
            using (Context contex = new Context())
            {
                var todos = contex.Todos.AsQueryable();
                if(!string.IsNullOrEmpty(filter))
                    todos = todos.Where(t => t.Name.Contains(filter ?? ""));

                    todos = todos.OrderBy(t => t.Name)
                   .Skip(page??0*pageSize)
                   .Take(pageSize);
                  
                return todos.ToList();
            }

        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]Todo value)
        {
            using (Context context = new Context())
            {
                if (ModelState.IsValid)
                {
                    context.Todos.Add(value);
                    context.SaveChanges();
                }
            }
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
