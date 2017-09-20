using AngularEFWEBAPI.Data.Contexts;
using AngularEFWEBAPI.Model.Models;
using AngularEFWEBAPI.Repository.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularEFWEBAPI.Repository.Repositories
{
    public sealed class PersonRepository : BaseRepository<PersonModel>
    {
        public PersonRepository():base(new ApplicationDbContext())
        {

        }
    }
}
