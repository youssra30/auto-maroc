<h1>Modifier voiture</h1>

<form action="{{ route('cars.update', $car->id) }}" method="POST" enctype="multipart/form-data">
@csrf
@method('PUT')

<input type="text" name="brand" value="{{ $car->brand }}"><br><br>
<input type="text" name="model" value="{{ $car->model }}"><br><br>
<input type="number" name="year" value="{{ $car->year }}"><br><br>
<input type="text" name="fuel_type" value="{{ $car->fuel_type }}"><br><br>
<input type="text" name="transmission" value="{{ $car->transmission }}"><br><br>
<input type="number" name="price" value="{{ $car->price }}"><br><br>
<input type="number" name="mileage" value="{{ $car->mileage }}"><br><br>

<input type="file" name="image"><br><br>

<button type="submit">Update</button>
</form>