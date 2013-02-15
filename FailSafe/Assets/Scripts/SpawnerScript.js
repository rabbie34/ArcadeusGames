#pragma strict

var spawnTime = 1.0f;
var platformPrefab : GameObject;
public var platformGapMin = 0.25f;
public var platformGapMax = 0.25f;
private var spawnTimer : float;
var platformNumber  = 0;

function Start () 
{
	spawnTimer = spawnTime;
}

function FixedUpdate ()
{
	spawnTimer+= Time.deltaTime;
	//platformGap = 0.25f;
	
	if (spawnTimer >= spawnTime)
	{
		spawnTimer = 0;
		platformNumber++;
		var Gap = Random.Range(platformGapMin,platformGapMax);
		
		var Platform : GameObject = GameObject.Instantiate(platformPrefab,
		
		 Vector3(-2.5 - Gap/2 + Random.Range(-1.25f,1.25f),-0.25f,0),
		 
		 Quaternion.identity);
		Platform.name = "Platform"+platformNumber.ToString();
		 
		
		GameObject.Find("/"+Platform.name+"/Platform2").transform.Translate(Gap,0,0);
		 
		//var Platform2 : GameObject = GameObject.Instantiate(platformPrefab, Vector3(2.5 + platformGap/2,0,0),Quaternion.identity);
		//Destroy(Platform, 2.5f / Platform.GetComponent(PlatformScript).Speed);
		//Destroy(Platform2, 2 / Platform.GetComponent(PlatformScript).Speed);
		//Platform2.transform.parent = Platform.transform;
		
	}
}