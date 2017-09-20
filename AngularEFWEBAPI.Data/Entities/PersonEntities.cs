using System;
using System.Collections.Generic;
using AngularEFWEBAPI.Model.Models;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularEFWEBAPI.Data.Entities
{
    public class PersonEntities : EntityTypeConfiguration<PersonModel>
    {
        public PersonEntities()
        {
            HasKey(c => c.ID);

            Property(c => c.Name)
                .HasColumnType("Varchar")
                .HasMaxLength(50)
                .IsRequired();
            Property(c => c.LastName)
                .HasColumnType("Varchar")
                .HasMaxLength(50)
                .IsRequired();
            Property(c => c.Document)
                .HasColumnType("Varchar")
                .HasMaxLength(8)
                .IsRequired();
            Property(c => c.Email)
                .HasColumnType("Varchar")
                .HasMaxLength(100);

            Property(c => c.Address)
                .HasColumnType("Varchar")
                .HasMaxLength(100);
            Property(c => c.Cellphone)
                .HasColumnType("Varchar")
                .HasMaxLength(100);
            Property(c => c.Phone)
                .HasColumnType("Varchar")
                .HasMaxLength(100);

            Property(c => c.AddedDate)
                .IsOptional();

            Property(c => c.UserModifedId)
                .IsOptional();
            Property(c => c.ModifiedDate)
                .IsOptional();


            ToTable("Person");

        }
    }
}
