using System;
using System.Text;
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

    public async Task PutPolicy(Uri baseUri, OpaPolicy policy)
    {
        using var client = new HttpClient { BaseAddress = baseUri };
        await client.PutAsync($"v1/policies/{policy.Id}", new StringContent(policy.Raw));
    }

    public async Task PutPolicy(Uri baseUri, string policyName, string rawRego)
    {
        using var client = new HttpClient { BaseAddress = baseUri };
        await client.PutAsync($"v1/policies/{policyName}", new StringContent(rawRego));
    }

    public async Task DeletePolicyAsync(Uri baseUri, string policyName)
    {
        using var client = new HttpClient { BaseAddress = baseUri };
        await client.DeleteAsync($"v1/policies/{policyName}");
    }

    public string Query(Uri baseUri, string dataPath, string inputJson)
    {
        using var client = new HttpClient { BaseAddress = baseUri };

        var payload = "{ \"input\" : " + inputJson + " }";

        var response = client.PostAsync($"v1/data/{dataPath}",
                                        new StringContent(payload,                  
                                                          Encoding.UTF8, 
                                                          "application/json")).Result;

        return response.Content.ReadAsStringAsync().Result;
    }

    public class OpaQueryResult {
        public object Result {get;set;}
        public OpaError[] Errors {get;set;}
    }

    public class OpaError
    {
        public string Code {get;set;}
        public string Message {get;set;}
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

    public string GetPackage()
    {
        using var reader = new StringReader(Raw);
        var line = reader.ReadLine();
        while(line != null){
            if(line.StartsWith("package")) return line.Split(null, 2).Last();
            line = reader.ReadLine();
        }
        return Id;
    }
}