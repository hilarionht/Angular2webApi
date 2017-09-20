using System;
using System.Text;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using AngularEFWEBAPI.Data.Contexts;
using AngularEFWEBAPI.Model.Models;
using AngularEFWEBAPI.Repository.Repositories;

namespace AngularEFWEBAPI.Test.Data
{
    /// <summary>
    /// Descripción resumida de CreatingPersonTest
    /// </summary>
    [TestClass]
    public class CreatingPersonTest
    {
        public PersonRepository repository = new PersonRepository();
        [TestMethod]
        public void CreatePersonTest()
        {
            var ctx = new ApplicationDbContext();
            var person = new PersonModel()
            {
                Name = "Hilarion",
                LastName = "Trejo",
                Document = "27254180",
                AddedDate = DateTime.Now,
                BirtDate = DateTime.Now,
                Email = "trejo.hilarion@gmail",
                ModifiedDate = DateTime.Now
                
            };
            ctx.Persons.Add(person);
            ctx.SaveChanges();
        }
        [TestMethod]
        public void List()
        {
            var query = repository.GetAll();

            var item = repository.Find(6);
            item.Phone = "154965966";
            repository.Update(item);
            query = repository.GetAll();
        }
    }
}
