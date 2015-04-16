using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebApplication2.DBModels;

namespace WebApplication2
{
    public class Initializer : DropCreateDatabaseIfModelChanges<Context>
    {
        protected override void Seed(Context context)
        {
            var todos = new List<Todo>() {
            new Todo{ Name="Do some work", Comment="Arial"},
            new Todo{ Name="Some other work", Comment="Crazy work"},
            new Todo{ Name="Do some for a walk", Comment="3 hours"},
            new Todo{ Name="By some fruts", Comment="Mangos"},
            new Todo{ Name="Repear TVs", Comment="Fuckin tv broken"},
             new Todo{ Name="Task3", Comment="Fuckin tv broken"},
              new Todo{ Name="Fly away from hear", Comment="Like a superman"},
               new Todo{ Name="Mastery task", Comment="Dont even ask"},
                new Todo{ Name="Go away. Stop it", Comment="Yea!!"},
                 new Todo{ Name="Stoooopppp!!!!", Comment="Stop do it."},

            };
            todos.ForEach((item) => { context.Todos.Add(item); });
            context.SaveChanges();
        }
    }
}