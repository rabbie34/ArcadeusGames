#pragma strict

var spawnTime = 1.0f;

var numberSpawnTime = 4.0f;
var ballSpawnTime = 2.0f;
var inkSpawnTime = 8.0f;
public var platformGapMin = 0.5f;
public var platformGapMax = 0.5f;
public var platformSpeed = 0.75f;
var platformPrefab : GameObject;
var numberPrefab : GameObject;
var ballPrefab : GameObject;
var inkPrefab : GameObject;
private var numberSpawning : boolean = false;
private var spawnTimer : float;
private var numberSpawnTimer : float;
private var platformNumber  = 0;
private var currentNumber : int = 0;
private var maxNumbers : int;
var ballSpawning : boolean = false;
private var ballSpawnTimer = 0.0f;
var inkSpawning : boolean = true;
private var inkSpawnTimer = 0.0f;
private var inkDueSpawn : boolean = false;

function Start () 
{
	spawnTimer = spawnTime;
	maxNumbers = GameObject.Find("NumberGUI").GetComponent(NumberGUIScript).amountOfNumbers;
}

function FixedUpdate ()
{
	if(ballSpawning)
	{
		ballSpawnTimer+=Time.deltaTime;
		if(ballSpawnTimer > ballSpawnTime)
		{
			ballSpawnTimer = 0;
			ballSpawning = false;
			GameObject.Instantiate(ballPrefab, ballPrefab.transform.position, ballPrefab.transform.rotation);
		}
	}
	if(inkSpawning)
	{
		inkSpawnTimer+=Time.deltaTime;
		if(inkSpawnTimer > inkSpawnTime)
		{
			inkSpawnTimer = 0;
			inkSpawning = false;
			inkDueSpawn = true;
			
		}
	}
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
		
		 Vector3(-2.5 - Gap/2 + Random.Range(-1.0f + Gap/2,1.0f - Gap/2),transform.position.y,0),
		 
		 Quaternion.identity);
		 if(inkDueSpawn == true)
		 {
			
			var inkSpawn : GameObject = GameObject.Instantiate(inkPrefab, Vector3(Random.Range(-0.8f,0.8f)
			, transform.position.y - 0.1f, inkPrefab.transform.position.z), 
			inkPrefab.transform.rotation);
			var marginOfError : float = Platform.transform.position.x +2.5 + Gap/2 - inkSpawn.transform.position.x;
			while (marginOfError > -0.5 && marginOfError < 0.5)
			{
				Debug.Log("Moved blob");
				inkSpawn.transform.position = Vector3(Random.Range(-0.8f,0.8f), transform.position.y - 0.1f, inkPrefab.transform.position.z);
				marginOfError = Platform.transform.position.x +2.5 + Gap/2 - inkSpawn.transform.position.x;
			}
			inkSpawn.GetComponent(InkEnemyScript).Speed = platformSpeed;
			//inkDueSpawn = false;
		 }
		 if (numberSpawning == true)
		 {
			if(currentNumber< maxNumbers)
			{
				if(currentNumber == 0)
					ballSpawning = true;
				var newNumber : GameObject = GameObject.Instantiate(numberPrefab,
				Vector3(Random.Range(-0.8f,0.8f)
				, transform.position.y+0.25f, 0),
				numberPrefab.transform.rotation);
				numberSpawning = false;
				newNumber.GetComponent(PlatformScript).setSpeed(platformSpeed);
				newNumber.GetComponent(NumberScript).setPosition(currentNumber);
				currentNumber++;
			}
			else
			{
				numberSpawning = false;
			}
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