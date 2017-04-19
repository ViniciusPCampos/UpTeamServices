﻿using System.Data.Entity.ModelConfiguration;
using UPTEAM.Domain.Entities;

namespace UPTEAM.Infra.Data.EntityConfig
{
    class SprintMapping :  EntityTypeConfiguration<tb_sprint>
    {
        public SprintMapping()
        {
            HasKey(x => x.idt_sprint);
        }
    }
}
