using Microsoft.EntityFrameworkCore;
using ProAtiva.API.Model;

namespace ProAtiva.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}
        
        public DbSet<Fundo> Fundos { get; set; }
    }
}