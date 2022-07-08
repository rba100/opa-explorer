using System;
using Microsoft.AspNetCore.Mvc;
using OpaExplorer.Core;

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

    [HttpPut, Route("")]
    public async Task<IActionResult> Put([FromBody] PutPolicyBinding binding)
    {
        if(binding is null) return BadRequest("incorrect request body");
        if(binding.InstanceUri is null) return BadRequest("no instance specified");
        if(binding.OpaPolicy is null) return BadRequest("no policy specified");

        var client = new OpaExplorer.Core.OpaClient();

        await client.PutPolicy(new Uri(binding.InstanceUri), binding.OpaPolicy);

        return Ok("Saved");
    }

    public class PutPolicyBinding{
        public string? InstanceUri {get;set;}
        public OpaPolicy? OpaPolicy {get;set;}
    }
}