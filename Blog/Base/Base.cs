using Microsoft.AspNetCore.Components;
using static Blog.Shared.MainLayout;

namespace Blog.Base
{
    public class Base : ComponentBase
    {
        [CascadingParameter(Name = "seo")]
        public Seo seo { get; set; }
    }
}
