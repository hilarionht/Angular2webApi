using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularEFWEBAPI.Model.Base
{
    public class BaseModel
    {
        public Int64 ID { get; set; }
        public DateTime AddedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        public int UserModifedId { get; set; }
    }
}
