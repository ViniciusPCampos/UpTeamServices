﻿using System.Collections.Generic;
using UPTEAM.Domain.Entities;

namespace UPTEAM.Domain.ServiceInterfaces
{
    public interface IPrioridadeService
    {
        ICollection<tt_prioridade> BuscarTudo();
    }
}
