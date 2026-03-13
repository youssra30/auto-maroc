<h1>Liste des voitures</h1>

<a href="{{ route('cars.create') }}">Ajouter</a>

<table border="1">
<tr>
    <th>Brand</th>
    <th>Model</th>
    <th>Year</th>
    <th>Fuel</th>
    <th>Transmission</th>
    <th>Price</th>
    <th>Mileage</th>
    <th>Image</th>
    <th>Actions</th>
</tr>

@foreach($cars as $car)
<tr>
    <td>{{ $car->brand }}</td>
    <td>{{ $car->model }}</td>
    <td>{{ $car->year }}</td>
    <td>{{ $car->fuel_type }}</td>
    <td>{{ $car->transmission }}</td>
    <td>{{ $car->price }}</td>
    <td>{{ $car->mileage }}</td>
    <td>
        @if($car->image)
            <img src="{{ asset('storage/'.$car->image) }}" width="80">
        @endif
    </td>
    <td>
        <a href="{{ route('cars.edit', $car->id) }}">Edit</a>

        <form action="{{ route('cars.destroy', $car->id) }}" method="POST" style="display:inline;">
            @csrf
            @method('DELETE')
            <button type="submit">Delete</button>
        </form>
    </td>
</tr>
@endforeach
</table>