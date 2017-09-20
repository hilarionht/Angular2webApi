using AngularEFWEBAPI.Model;
using AngularEFWEBAPI.Model.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularEFWEBAPI.Model.Models
{
    public class PersonModel: BaseModel
    {
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Document { get; set; }
        public DateTime BirtDate { get; set; }
        public string Phone { get; set; }
        public string Cellphone { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
    }
}
