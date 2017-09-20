using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace AngularEFWEBAPI.Repository.Interfaces
{
    public interface IRepository<TEntity> where TEntity : class
    {
        List<TEntity> GetAll();

        List<TEntity> GetAll(Expression<Func<TEntity, bool>> predicate);

        TEntity Find(int id);

        void Add(TEntity entity);

        void Update(TEntity entity);

        void Delete(TEntity entity);

    }
}
