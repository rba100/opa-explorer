using System;
using System.Net;

using Newtonsoft.Json;

namespace OpaExplorer.Core;

public class OpaClient
{
    public IReadOnlyCollection<OpaPolicy> GetPolicies(Uri baseUri)
    {
        using var client = new HttpClient { BaseAddress = baseUri };

        var response = client.GetAsync("v1/policies").Result;
        var responseJson = response.Content.ReadAsStringAsync().Result;

        var opaResponse = JsonConvert.DeserializeObject<OpaPoliciesResponse>(responseJson)!;
        return opaResponse.Result;
    }
}

public class OpaPoliciesResponse
{
    public IReadOnlyCollection<OpaPolicy> Result {get;set;}
}

public class OpaPolicy
{
    public string Id { get; set; }
    public string Raw { get; set; }
}