<script>
	import {
		Engine,
		functionCreateDatatable,
		Pagination,
		RowsPerPage,
		Search,
		Sort
	} from 'svelte-datatables-net';

	export let runlist = [];
	// export let listName = '';
	function kmToMiles(kmstr) {
		const cleanedString = kmstr.replace(/\s+|k/g, '');
		const km = parseFloat(cleanedString);
		if (isNaN(km)) {
			return 'Invalid Input';
		}
		const miles = km * 0.621371;
		return miles;
	}

	function parseString(inputString) {
		const numericPart = inputString.replace(/\s|[^0-9.]/g, '');
		const result = parseFloat(numericPart);
		return result;
	}
	function convertToHoursAndMinutes(inputString) {
		const numericPart = inputString.replace(/\s|min/g, '');
		const totalMinutes = parseInt(numericPart);
		const hours = Math.floor(totalMinutes / 60);
		const minutes = totalMinutes % 60;
		if (hours === 0) {
			return `${minutes}m`;
		} else {
			return `${hours}h ${minutes}m`;
		}
	}
	let objectDatatable = functionCreateDatatable({
		parData: runlist,
		parSearchableColumns: ['date', 'duration', 'distance', 'distance', 'weather'],
		parRowsPerPage: '10',
		parSearchString: '',
		parSortBy: 'date',
		parSortOrder: 'ascending'
	});
</script>

<Engine bind:propDatatable={objectDatatable} />

<div>
	<div>
		<div>
			<div>
				<span>Search:</span>
				<Search bind:propDatatable={objectDatatable} class="search-box" />
			</div>
			<div>
				<RowsPerPage bind:propDatatable={objectDatatable}>
					<option value="5">5</option>
					<option value="10">10</option>
					<option value="15">15</option>
					<option value="20">20</option>
					<option value="30">30</option>
					<option value="all">All</option>
				</RowsPerPage>
				<span>Results per Page</span>
			</div>
		</div>

		{#if objectDatatable.arraySearched.length === 0}
			<div><strong>No Records Found.</strong></div>
		{:else}
			<table>
				<thead>
					<tr>
						<th>
							<Sort bind:propDatatable={objectDatatable} propColumn={'date'}>Date</Sort>
						</th>
						<th>
							<Sort bind:propDatatable={objectDatatable} propColumn={'duration'}>Duration</Sort>
						</th>
						<th>
							<Sort bind:propDatatable={objectDatatable} propColumn={'distance'}>Distance km</Sort>
						</th>
						<th>
							<Sort bind:propDatatable={objectDatatable} propColumn={'distance'}>Distance m</Sort>
						</th>
						<th>
							<Sort bind:propDatatable={objectDatatable} propColumn={'weather'}>Weather</Sort>
						</th>
					</tr>
				</thead>
				<tbody>
					{#each objectDatatable.arrayData as row}
						<tr>
							<td>{row.date}</td>
							<td>{convertToHoursAndMinutes(row.duration)}</td>
							<td value={parseFloat(row.distance)}>{parseFloat(row.distance).toFixed(2)}</td>
							<td value={parseFloat(row.distance)}>{kmToMiles(row.distance).toFixed(2)}</td>
							<td>
								{row.weather}
								<img src="/weatherIcons/{row.weatherdesc}.svg" alt=" --- " />
							</td>
						</tr>
					{/each}
				</tbody>
			</table>

			<div>
				<Pagination bind:propDatatable={objectDatatable} propSize="default" />
			</div>
		{/if}
	</div>
</div>

<style>
	table {
		padding: 2%;
		width: 100%;
		border: 1px solid #ddd;
		box-shadow: 1px 1px, 2px 2px, 3px 3px, 4px 4px;
		margin-left: auto;
		margin-right: auto;
	}
	table tr {
		padding: 10px;
		background-color: #ffffff70;
	}
	table tr td {
		border-top: 1px solid #808080;
		text-align: center;
		padding-top: 2px;
		padding-bottom: 2px;
	}
	img {
		width: 40px;
	}

	@media only screen and (max-width: 600px) {
		img {
			width: 30px;
		}
		table {
			font-size: 14px;
		}
	}
</style>
