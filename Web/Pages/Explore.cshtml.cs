using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Web.Pages;

public class ExploreModel : PageModel
{
    private readonly ILogger<ExploreModel> _logger;

    [BindProperty(SupportsGet = true)]
    public Uri InstanceUri { get; set; }

    public IReadOnlyCollection<OpaExplorer.Core.OpaPolicy> Policies { get; set; }

    public ExploreModel(ILogger<ExploreModel> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {
        var client = new OpaExplorer.Core.OpaClient();
        Policies = client.GetPolicies(InstanceUri);
    }
}
