#nullable disable
using Microsoft.EntityFrameworkCore;

namespace WebApplicationDataTable.Models;

public partial class S2Context(DbContextOptions<S2Context> options) : DbContext(options)
{
    public virtual DbSet<Citiesofworld> Citiesofworlds { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.UseCollation("utf8mb4_0900_ai_ci").HasCharSet("utf8mb4");

        modelBuilder.Entity<Citiesofworld>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity
                .ToTable("citiesofworld")
                .HasCharSet("utf8mb3")
                .UseCollation("utf8mb3_general_ci");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.AirportName)
                .HasMaxLength(100)
                .HasColumnName("airport_name");
            entity.Property(e => e.City)
                .HasMaxLength(80)
                .HasColumnName("city");
            entity.Property(e => e.International).HasColumnName("international");
            entity.Property(e => e.Priority).HasColumnName("priority");
            entity.Property(e => e.Sigla)
                .HasMaxLength(3)
                .HasColumnName("sigla");
            entity.Property(e => e.SiglaCity)
                .HasMaxLength(3)
                .HasColumnName("sigla_city");
            entity.Property(e => e.SiglaCountry)
                .HasMaxLength(2)
                .HasColumnName("sigla_country");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}