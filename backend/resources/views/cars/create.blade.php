<h1>Ajouter voiture</h1>

@if ($errors->any())
    <div style="color:red;">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

<form action="{{ route('cars.store') }}" method="POST" enctype="multipart/form-data">
@csrf

<input type="text" name="brand" placeholder="Brand"><br><br>

<input type="text" name="model" placeholder="Model"><br><br>

<input type="number" name="year" placeholder="Year"><br><br>

<label>Fuel type</label><br>
<select name="fuel_type">
    <option value="">-- Choisir --</option>
    <option value="Diesel">Diesel</option>
    <option value="Essence">Essence</option>
    <option value="Hybrid">Hybrid</option>
    <option value="Electrique">Electrique</option>
</select>
<br><br>

<label>Transmission</label><br>
<select name="transmission">
    <option value="">-- Choisir --</option>
    <option value="Manuelle">Manuelle</option>
    <option value="Automatique">Automatique</option>
</select>
<br><br>

<input type="number" name="price" placeholder="Price"><br><br>

<input type="number" name="mileage" placeholder="Mileage"><br><br>

<input type="file" name="image"><br><br>

<button type="submit">Save</button>
</form>