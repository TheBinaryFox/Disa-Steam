using System;
using Disa.Framework.Steam;
using Disa.Framework;
using Disa.Framework.Mobile;

namespace Disa.Framework.Steam.Mobile
{
    public class Description : IPluginDescription<Steam>
    {
        public string FetchDescription(Steam service)
        {
            return Locale.String("plugin.description");
        }
    }
}
