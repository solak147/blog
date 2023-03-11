using Blog;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.AspNetCore.Localization;
using System.Globalization;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

var requestCulture = new RequestCulture("en-us", "en-us");

CultureInfo.DefaultThreadCurrentCulture = requestCulture.UICulture;         // WebAssembly Culture�BUICulture �����n�@�� https://docs.microsoft.com/zh-tw/aspnet/core/blazor/globalization-localization?view=aspnetcore-6.0&pivots=webassembly
CultureInfo.DefaultThreadCurrentUICulture = requestCulture.UICulture;      
var a = CookieRequestCultureProvider.DefaultCookieName;
await builder.Build().RunAsync();
