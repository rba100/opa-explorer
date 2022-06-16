using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using OpaExplorer.Core;

namespace Web.Pages;

public class ExploreModel : PageModel
{
    private readonly ILogger<ExploreModel> _logger;

    [BindProperty(SupportsGet = true)]
    public Uri? InstanceUri { get; set; }

    public IReadOnlyCollection<OpaPolicy> Policies { get; set; } = new OpaPolicy[0];

    public ExploreModel(ILogger<ExploreModel> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {
        if(InstanceUri is null) throw new InvalidOperationException("Must specify InstanceUrl");
        var client = new OpaExplorer.Core.OpaClient();
        Policies = client.GetPolicies(InstanceUri).OrderBy(p=>p.Id).ToArray();
    }
}
