using AngularEFWEBAPI.Model.Models;
using AngularEFWEBAPI.Repository.Repositories;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Http;

namespace AngularEFWEBAPI.Api.Controllers
{
    public class PersonController : ApiController
    {
        public PersonRepository repository = new PersonRepository();
        public PersonController()
        {

        }
        public HttpResponseMessage Get()
        {
            try
            {
                var result = new HttpResponseMessage(HttpStatusCode.OK);
                result.Content = new StringContent(JsonConvert.SerializeObject(repository.GetAll()));
                result.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
                return result;
            }
            catch
            {

                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
            //return Ok(repository.GetAll());
        }
        //GET: api/Person/5
        public IHttpActionResult Get(int id)
        {
            return Ok(repository.Find(id));
        }

        // POST: api/User
        public IHttpActionResult Post([FromBody]PersonModel person)
        {
            repository.Add(person);
            return CreatedAtRoute("DefaultApi", new { id = person.ID }, person);
        }

        // PUT: api/User/5
        public IHttpActionResult Put(int id, [FromBody]PersonModel person)
        {
            repository.Add(person);
            return StatusCode(HttpStatusCode.NoContent);
        }

        // DELETE: api/User/5
        public HttpResponseMessage Delete(int id)
        {
            var person = repository.Find(id);
            if(person == null)
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
            repository.Delete(person);
            return new HttpResponseMessage(HttpStatusCode.OK);
            //return Ok(person);
        }
    }
}
