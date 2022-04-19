using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Web.Pages;

public class ActionsModel : PageModel
{
    private readonly ILogger<ActionsModel> _logger;

    [BindProperty(SupportsGet = true)]
    public Uri InstanceUri { get; set; }

    public ActionsModel(ILogger<ActionsModel> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {
        var client = new OpaExplorer.Core.OpaClient();
    }
}
