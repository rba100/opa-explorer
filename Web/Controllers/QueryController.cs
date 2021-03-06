using System;
using Microsoft.AspNetCore.Mvc;

namespace OpaExplorer.Controllers;

[Route("api/v1/query")]
public class QueryController : Controller
{
    [HttpPost, Route("")]
    public IActionResult Post([FromBody] QueryRequest query)
    {
        if(query?.DataPath is null) return BadRequest("no data path specified");
        if(query?.OpaAddress is null) return BadRequest("no OPA endpoint specified");
        if(query?.Query is null) return BadRequest("no query specified");

        var client = new OpaExplorer.Core.OpaClient();
        var result = client.Query(query.OpaAddress, query.DataPath, query.Query ?? "\"\"");

        return Json(result);
    }

    [HttpGet, Route("")]
    public IActionResult Test()
    {
        return Ok("Hello, World!");
    }
}

public class QueryRequest
{
    public Uri? OpaAddress {get;set;}
    public string? DataPath {get;set;}
    public string? Query {get;set;}
}