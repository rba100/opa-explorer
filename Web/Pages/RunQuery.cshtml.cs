using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Web.Pages;

public class RunQueryModel : PageModel
{
    private readonly ILogger<RunQueryModel> _logger;

    [BindProperty(SupportsGet = true)]
    public Uri InstanceUri { get; set; }

    public RunQueryModel(ILogger<RunQueryModel> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {
        var client = new OpaExplorer.Core.OpaClient();
    }
}
