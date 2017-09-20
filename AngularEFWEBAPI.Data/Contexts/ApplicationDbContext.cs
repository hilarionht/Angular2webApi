using AngularEFWEBAPI.Data.Entities;
using AngularEFWEBAPI.Model.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace AngularEFWEBAPI.Data.Contexts
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext()
            : base(ConfigurationManager.ConnectionStrings["Angular2"].ConnectionString){ }
        public DbSet<PersonModel> Persons { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            Database.SetInitializer(new CreateDatabaseIfNotExists<ApplicationDbContext>());
            var typesToRegister = Assembly.GetExecutingAssembly().GetTypes()
           .Where(type => !String.IsNullOrEmpty(type.Namespace))
           .Where(type => type.BaseType != null && type.BaseType.IsGenericType && type.BaseType.GetGenericTypeDefinition() == typeof(EntityTypeConfiguration<>));
            foreach (var type in typesToRegister)
            {
                dynamic configurationInstance = Activator.CreateInstance(type);
                modelBuilder.Configurations.Add(configurationInstance);
            }
            base.OnModelCreating(modelBuilder);
            //modelBuilder.Configurations.Add(new PersonEntities());
        }
    }
}
