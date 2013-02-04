#pragma strict

var spawnTime = 1.0f;
var platformPrefab : GameObject;
var platformGap = 0.25f;
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
		
		var Platform : GameObject = GameObject.Instantiate(platformPrefab,
		
		 Vector3(-2.5 - 0.25/2 + Random.Range(-1.25f,1.25f),-0.25f,0),
		 
		 Quaternion.identity);
		Platform.name = "Platform"+platformNumber.ToString();
		 
		
		GameObject.Find("/"+Platform.name+"/Platform2").transform.Translate(Random.Range(-platformGap/2,platformGap/2),0,0);
		 
		//var Platform2 : GameObject = GameObject.Instantiate(platformPrefab, Vector3(2.5 + platformGap/2,0,0),Quaternion.identity);
		//Destroy(Platform, 2.5f / Platform.GetComponent(PlatformScript).Speed);
		//Destroy(Platform2, 2 / Platform.GetComponent(PlatformScript).Speed);
		//Platform2.transform.parent = Platform.transform;
		
	}
}