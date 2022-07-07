using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Web.Pages;

public class EditPolicyModel : PageModel
{
    private readonly ILogger<RunQueryModel> _logger;

    [BindProperty(SupportsGet = true)]
    public Uri? InstanceUri { get; set; }

    [BindProperty(SupportsGet = true)]
    public string? PolicyId { get; set; }

    [BindProperty(SupportsGet = true)]
    public string? PolicyRego { get; set; }

    public EditPolicyModel(ILogger<RunQueryModel> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {
        var client  = new OpaExplorer.Core.OpaClient();
        if(InstanceUri is not null)
            PolicyRego = client.GetPolicies(InstanceUri!).FirstOrDefault(p=>p.Id == PolicyId)?.Raw;
    }
}
