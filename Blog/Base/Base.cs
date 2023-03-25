using Microsoft.AspNetCore.Components;
using static Blog.Shared.MainLayout;

namespace Blog.Base
{
    public class Base : ComponentBase
    {
        [CascadingParameter(Name = "seo")]
        public Seo seo { get; set; }

        public string h1Title = "中二病也要寫程式";
    }
}
