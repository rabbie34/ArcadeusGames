#pragma strict

var spawnTime = 1.0f;

var numberSpawnTime = 4.0f;
public var platformGapMin = 0.5f;
public var platformGapMax = 0.5f;
public var platformSpeed = 0.75f;
var platformPrefab : GameObject;
var numberPrefab : GameObject;
private var numberSpawning : boolean = false;
private var spawnTimer : float;
private var numberSpawnTimer : float;
private var platformNumber  = 0;

function Start () 
{
	spawnTimer = spawnTime;
}

function FixedUpdate ()
{
	spawnTimer+= Time.deltaTime;
	if (numberSpawning == false)
	{
		numberSpawnTimer+= Time.deltaTime;
	}
	//platformGap = 0.25f;
	
	if (numberSpawnTimer >= numberSpawnTime)
	{
		numberSpawning = true;
		numberSpawnTimer = 0.0f;
	}
	
	if (spawnTimer >= spawnTime)
	{
		spawnTimer = 0;
		platformNumber++;
		var Gap = Random.Range(platformGapMin,platformGapMax);
		
		var Platform : GameObject = GameObject.Instantiate(platformPrefab,
		
		 Vector3(-2.5 - Gap/2 + Random.Range(-1.25f,1.25f),-0.5f,0),
		 
		 Quaternion.identity);
		 if (numberSpawning == true)
		 {
			var newNumber : GameObject = GameObject.Instantiate(numberPrefab,
			Vector3(Random.Range(-1.25f,1.25f), -0.25f, 0),
			numberPrefab.transform.rotation);
			numberSpawning = false;
			newNumber.GetComponent(PlatformScript).setSpeed(platformSpeed);
		 }
		Platform.name = "Platform"+platformNumber.ToString();
		Platform.GetComponent(PlatformScript).setSpeed(platformSpeed);
		 
		
		GameObject.Find("/"+Platform.name+"/Platform2").transform.Translate(Gap,0,0);
		 
		//var Platform2 : GameObject = GameObject.Instantiate(platformPrefab, Vector3(2.5 + platformGap/2,0,0),Quaternion.identity);
		//Destroy(Platform, 2.5f / Platform.GetComponent(PlatformScript).Speed);
		//Destroy(Platform2, 2 / Platform.GetComponent(PlatformScript).Speed);
		//Platform2.transform.parent = Platform.transform;
		
	}
}