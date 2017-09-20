using AngularEFWEBAPI.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace AngularEFWEBAPI.Repository.Base
{
    public abstract class BaseRepository<TEntity> : IRepository<TEntity> where TEntity : class
    {

        private DbContext _context = null;
        protected DbSet<TEntity> _entity = null;

        public BaseRepository(DbContext context)
        {
            this._context = context;
            this._entity = _context.Set<TEntity>();
        }

        public void Add(TEntity entity)
        {
            _context.Set<TEntity>().Add(entity);
            _context.SaveChanges();
        }

        public void Delete(TEntity entity)
        {
            _context.Set<TEntity>().Remove(entity);
            _context.SaveChanges();
        }

        public TEntity Find(int id)
        {
            return _context.Set<TEntity>().Find(id);
        }

        public List<TEntity> GetAll()
        {
            var query = _context.Set<TEntity>().ToList();
            return query;
        }

        public List<TEntity> GetAll(Expression<Func<TEntity, bool>> predicate)
        {
            var query = _context.Set<TEntity>().Where(predicate).ToList();
            return query;
        }

        public void Update(TEntity entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            _context.SaveChanges();
        }
    }
}
