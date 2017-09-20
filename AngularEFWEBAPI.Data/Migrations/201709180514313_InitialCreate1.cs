namespace AngularEFWEBAPI.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate1 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Person", "AddedDate", c => c.DateTime());
            AlterColumn("dbo.Person", "ModifiedDate", c => c.DateTime());
            AlterColumn("dbo.Person", "UserModifedId", c => c.Int());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Person", "UserModifedId", c => c.Int(nullable: false));
            AlterColumn("dbo.Person", "ModifiedDate", c => c.DateTime(nullable: false));
            AlterColumn("dbo.Person", "AddedDate", c => c.DateTime(nullable: false));
        }
    }
}
