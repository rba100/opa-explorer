using System;
using Microsoft.AspNetCore.Mvc;

namespace OpaExplorer.Controllers;

[Route("api/v1/policies")]
public class PolicyController : Controller
{
    [HttpDelete, Route("")]
    public async Task<IActionResult> Delete(string policyId, string instanceUri)
    {
        if(policyId is null) return BadRequest("no policyId specified");

        var client = new OpaExplorer.Core.OpaClient();

        await client.DeletePolicyAsync(new Uri(instanceUri), policyId);

        return Ok();
    }
}