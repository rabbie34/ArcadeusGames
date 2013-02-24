#pragma strict

var Speed : float;

function Start () {

}

function Update () {

}

function FixedUpdate ()
{
	this.transform.Translate(0,Speed*Time.deltaTime,0, Space.World);
}

function setSpeed (speed : float)
{
	this.Speed = speed;
}